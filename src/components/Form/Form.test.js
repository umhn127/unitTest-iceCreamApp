import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";

test("Koşulların onaylanmasına göre buton aktifliği", () => {
  // 1) test edilecek olan bileşen render edilir
  render(<Form />);

  // 2) gerekli elemanları çağır
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  // 3) buton inaktiftir
  expect(button).toBeDisabled();

  // 4) checkbox tiklenmemiştir
  expect(checkbox).not.toBeChecked();

  // 5) checkbox ı tikle
  fireEvent.click(checkbox);

  // 6) butonun aktif olduğunu kontrol et
  expect(button).toBeEnabled();

  // 7) checkbox ın tikini kaldır
  fireEvent.click(checkbox);

  // 8) buton inaktiftir
  expect(button).toBeDisabled();
});

test("Butonun hover durumuna göre bildirim gözükür", () => {
  // 1) formu render et
  render(<Form />);

  // 2) gerekli elemanları al
  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");
  const alert = screen.getByText(/size gerçekten/i);
  // i = insensitive(karakter duyarlılığı yapma)

  // 3) checkbox ı tikle
  fireEvent.click(checkbox);

  // 4) bildirimin ekranda olmadığını kontrol et
  expect(alert).not.toBeVisible();

  // 5) mouse u butona getir
  fireEvent.mouseEnter(button);

  // 6) bildirim ekrana geldi mi kontrol et
  expect(alert).toBeVisible();

  // 7) mouse u butonun üzerinden çek
  fireEvent.mouseLeave(button);

  // 8) bildirim ekranda yok mu kontrol et
  expect(alert).not.toBeVisible();
});
