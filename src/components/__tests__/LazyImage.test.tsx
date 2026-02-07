import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import LazyImage from '../UI/LazyImage';

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});

window.IntersectionObserver = mockIntersectionObserver;

describe('LazyImage', () => {
  it('renders placeholder initially', () => {
    render(<LazyImage src="test.jpg" alt="Test image" />);
    
    // Should show placeholder icon initially
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
  });

  it('loads image when in view', async () => {
    const mockObserve = vi.fn();
    const mockDisconnect = vi.fn();
    
    mockIntersectionObserver.mockImplementation((callback) => ({
      observe: mockObserve,
      disconnect: mockDisconnect,
      unobserve: () => null
    }));

    render(<LazyImage src="test.jpg" alt="Test image" />);
    
    expect(mockObserve).toHaveBeenCalled();
  });

  it('calls onLoad when image loads successfully', async () => {
    const onLoad = vi.fn();
    
    render(<LazyImage src="test.jpg" alt="Test image" onLoad={onLoad} />);
    
    // Simulate image load
    const img = screen.getByRole('img', { hidden: true });
    img.dispatchEvent(new Event('load'));
    
    expect(onLoad).toHaveBeenCalled();
  });

  it('calls onError when image fails to load', async () => {
    const onError = vi.fn();
    
    render(<LazyImage src="invalid.jpg" alt="Test image" onError={onError} />);
    
    // Simulate image error
    const img = screen.getByRole('img', { hidden: true });
    img.dispatchEvent(new Event('error'));
    
    expect(onError).toHaveBeenCalled();
  });
});