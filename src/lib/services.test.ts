import { test, vi, expect } from 'vitest';
import { createPdf, endpoint } from './services.ts';

global.fetch = vi.fn();
beforeEach(() => {
  vi.clearAllMocks();
});

test('createPdf service call fetch with correct parameters and return base64 string', async () => {
  const mockText = 'Test text';
  const mockArrayBuffer = new TextEncoder().encode('mocked response').buffer;

  global.fetch.mockResolvedValueOnce({
    arrayBuffer: vi.fn().mockResolvedValueOnce(mockArrayBuffer),
  } as any);

  const result = await createPdf(mockText);

  expect(global.fetch).toHaveBeenCalledWith(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: mockText }),
  });

  const expectedBase64String = btoa(String.fromCharCode(...new Uint8Array(mockArrayBuffer)));
  expect(result).toBe(expectedBase64String);
});

test('createPdf throws an error when fetch fails', async () => {
  const mockText = 'Test text';
  const mockError = new Error('Fetch failed');

  global.fetch.mockRejectedValueOnce(mockError);

  await expect(createPdf(mockText)).rejects.toThrow(mockError);
});
