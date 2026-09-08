import { test, expect } from "./helpers/foundry-test";

test.describe("06 - Market Intel Module", () => {
  test("powinien obsługiwać wyceny słupków, filtry wykresu 2020–2026 i rejestr aktów notarialnych RCN", async ({
    foundry,
  }) => {
    const { page, waitForHydration, assertNoConsoleErrors } = foundry;

    await page.goto("/");
    await waitForHydration();

    // 1. Przejście do modułu Market Intel
    const modBtn = page.locator(".bp6-navbar button:has-text('Market Intel')");
    await modBtn.click();

    await expect(page.locator("h2:has-text('MARKET INTEL')")).toBeVisible();

    // 2. Kafelki KPI rynku RCN
    await expect(page.locator("text=Mediana Cen M² (RCN)")).toBeVisible();
    await expect(page.locator("text=Średnia Ucięta (IQR)")).toBeVisible();

    // 3. Tabela Wycen przy Słupkach (DuckDB Bridge)
    await expect(page.locator(".bp6-table-container").first()).toBeVisible();
    await expect(page.locator("text=Żytnia I").first()).toBeVisible();

    // 4. Przejście na zakładkę Trendy Cenowe (2020–2026)
    const trendsTab = page.locator("div.bp6-tab:has-text('Trendy Cenowe')");
    await trendsTab.click();

    await expect(page.locator("text=Dynamika Cen Transakcyjnych RCN (2020–2026)")).toBeVisible();
    await expect(page.locator(".recharts-responsive-container").first()).toBeVisible();

    // Zmiana interwału wykresu na Rocznie
    const yearBtn = page.locator("button:has-text('Rocznie')");
    await expect(yearBtn).toBeVisible();
    await yearBtn.click();

    // 5. Przejście na zakładkę Rejestr Aktów Notarialnych
    const txTab = page.locator("div.bp6-tab:has-text('Rejestr Aktów')");
    await txTab.click();

    await expect(page.locator(".bp6-table-container:visible")).toBeVisible();
    await expect(page.locator("text=12 400 PLN/m²").first()).toBeVisible();

    // 6. Zero błędów konsoli
    assertNoConsoleErrors();
  });
});
