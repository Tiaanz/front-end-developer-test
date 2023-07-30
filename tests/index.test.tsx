import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';
import '@testing-library/jest-dom';
import type * as ReactDom from 'react-dom';
import { act } from 'react-dom/test-utils';


const testData = {
  id: 1,
  title: 'Classic Tee',
  description: 'good quality',
  price: 75,
  imageURL: 'https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg',
  sizeOptions: [
    { id: 1, label: 'S' },
    { id: 2, label: 'M' },
  ],
};

const mockFetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(testData),
})
) as unknown as jest.MockedFunction<typeof fetch>;

(global as any).fetch = mockFetch;

jest.mock('react-dom', () => ({
  ...jest.requireActual<typeof ReactDom>('react-dom'),
  preload: jest.fn(),
}));

describe('Home', () => {
  it('renders the heading for Classic Tee product', async () => {
    await act(async () => {
      render(<Home />);
    });

    const heading = screen.getByRole('heading', {
      name: 'Classic Tee',
    });

    expect(heading).toHaveTextContent(testData.title);
  });
});
