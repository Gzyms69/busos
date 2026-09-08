import { test, expect } from "./helpers/foundry-test";

test.describe("07 - National Benchmark Module", () => {
  test("powinien obsługiwać Leaderboard 30 miast z przełączeniem miasta, porównywarkę z tagami delta i histogram metryk", async ({
    foundry,
  }) => {
    const { page, waitForHydration, getStoreState, assertNoConsoleErrors } = foundry;

    await page.goto("/");
    await waitForHydration();

    // 1. Przejście do modułu Benchmarking
    const modBtn = page.locator(".bp6-navbar button:has-text('Benchmarking')");
    await modBtn.click();

    await expect(page.locator("h2:has-text('BENCHMARKING KRAJOWY')")).toBeVisible();

    // 2. Tablica Liderów i przycisk "Wybierz" (przełączenie miasta)
    await expect(page.locator("text=WARSZAWA").first()).toBeVisible();
    await expect(page.locator("text=KRAKOW").first()).toBeVisible();

    // Kliknięcie przycisku "Wybierz" przy Warszawie (lub pierwszym dostępnym)
    const selectBtn = page.locator("button:has-text('Wybierz')").first();
    await expect(selectBtn).toBeVisible();
    await selectBtn.click();

    let state = await getStoreState();
    expect(state.selectedCity).toBe("warszawa");

    // 3. Przełączenie na zakładkę Porównywarka Miast (Side-by-Side)
    const compareTab = page.locator("div.bp6-tab:has-text('Porównywarka Miast')");
    await compareTab.click();

    await expect(page.locator("text=Porównywarka Metryczna Side-by-Side").first()).toBeVisible();
    await expect(page.locator("text=Fizyczne Słupki Przystankowe").first()).toBeVisible();

    // 4. Przełączenie na zakładkę Rozkład Kwantylowy Metryk
    const distTab = page.locator("div.bp6-tab:has-text('Rozkład Kwantylowy')");
    await distTab.click();

    await expect(page.locator("text=Rozkład Statystyczny & Kwantyle Metryki").first()).toBeVisible();
    await expect(page.locator(".recharts-responsive-container").first()).toBeVisible();

    // Zmiana metryki w selektorze HTMLSelect
    const metricSelect = page.locator("select:visible").first();
    await expect(metricSelect).toBeVisible();
    await metricSelect.selectOption("stop_departures_h");

    // 5. Zero błędów w konsoli
    assertNoConsoleErrors();
  });
});
