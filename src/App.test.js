import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

test('shows Lesotho destinations and the home page', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /discover the mountain kingdom/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /explore lesotho/i })).toBeInTheDocument();
  expect(screen.getAllByRole('button', { name: /view details for/i })).toHaveLength(8);
});

test('search and category filters update the destination results', () => {
  render(<App />);
  fireEvent.change(screen.getByRole('searchbox', { name: /search destinations/i }), { target: { value: 'Katse' } });
  expect(screen.getAllByRole('button', { name: /view details for/i })).toHaveLength(1);
  expect(screen.getByRole('button', { name: /view details for katse dam/i })).toBeInTheDocument();

  fireEvent.change(screen.getByRole('searchbox', { name: /search destinations/i }), { target: { value: '' } });
  fireEvent.change(screen.getByRole('combobox', { name: /filter by category/i }), { target: { value: 'Heritage & culture' } });
  expect(screen.getAllByRole('button', { name: /view details for/i })).toHaveLength(2);
});

test('opens attraction details and can start a prefilled enquiry', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /view details for maletsunyane falls/i }));
  const dialog = screen.getByRole('dialog', { name: /maletsunyane falls/i });
  expect(within(dialog).getByText(/activities to try/i)).toBeInTheDocument();
  fireEvent.click(within(dialog).getByRole('link', { name: /plan a visit/i }));
  expect(screen.getByRole('combobox', { name: /selected destination/i })).toHaveValue('Maletsunyane Falls');
});

test('marks a message under ten characters invalid while typing', () => {
  render(<App />);
  const messageField = screen.getByLabelText(/your message/i);

  expect(messageField).toHaveAttribute('aria-invalid', 'false');
  expect(screen.getByText(/at least 10 characters/i)).toBeInTheDocument();

  fireEvent.change(messageField, { target: { value: 'Too short' } });
  expect(messageField).toHaveAttribute('aria-invalid', 'true');
  expect(screen.getByText(/at least 10 characters/i)).toBeInTheDocument();

  fireEvent.change(messageField, { target: { value: 'Ten chars!' } });
  expect(messageField).toHaveAttribute('aria-invalid', 'false');
  expect(screen.queryByText(/at least 10 characters/i)).not.toBeInTheDocument();
});

test('validates required enquiry fields and confirms a valid submission', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /send enquiry/i }));
  expect(screen.getByText(/please enter your full name/i)).toBeInTheDocument();
  expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
  fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: '-------' } });
  fireEvent.click(screen.getByRole('button', { name: /send enquiry/i }));
  expect(screen.getByText(/7 to 15 digits/i)).toBeInTheDocument();

  fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Palesa123# Molefe' } });
  expect(screen.getByLabelText(/full name/i)).toHaveValue('Palesa Molefe');
  expect(screen.getByLabelText(/full name/i)).toHaveValue('Palesa Molefe');
  fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: '266+45abc645478!' } });
  expect(screen.getByLabelText(/phone number/i)).toHaveValue('26645645478');
  fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: '+266 45abc645478!' } });
  expect(screen.getByLabelText(/phone number/i)).toHaveValue('+26645645478');
  fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: '266+45abc645478!' } });
  fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: '+266 45abc645478!' } });
  expect(screen.queryByText(/valid phone number/i)).not.toBeInTheDocument();

  fireEvent.change(screen.getByLabelText(/number of visitors/i), { target: { value: '2.5' } });
  fireEvent.click(screen.getByRole('button', { name: /send enquiry/i }));
  expect(screen.getByText(/whole number of visitors/i)).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /send enquiry/i }));
  expect(screen.getByText(/valid email address/i)).toBeInTheDocument();
  expect(screen.queryByText(/valid phone number/i)).not.toBeInTheDocument();

  fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Palesa Molefe' } });
  fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'palesa@example.com' } });
  fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: '+266 5890 1234' } });
  fireEvent.change(screen.getByRole('combobox', { name: /selected destination/i }), { target: { value: 'Katse Dam' } });
  fireEvent.change(screen.getByLabelText(/number of visitors/i), { target: { value: '25' } });
  expect(screen.getByLabelText(/number of visitors/i)).toHaveValue(25);
  fireEvent.change(screen.getByLabelText(/preferred visit date/i), { target: { value: '2027-05-12' } });
  fireEvent.change(screen.getByLabelText(/your message/i), { target: { value: 'We are interested in a guided dam tour.' } });
  fireEvent.click(screen.getByRole('button', { name: /send enquiry/i }));
  expect(screen.getByRole('status')).toHaveTextContent(/your journey starts/i);
});
