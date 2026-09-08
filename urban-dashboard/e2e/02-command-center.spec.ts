import { test, expect } from "./helpers/foundry-test";

test.describe("02 - Command Center Module", () => {
  test("powinien poprawnie wyświetlać kafelki KPI, wykres rozkładu ocen i wykonywać flyTo po kliknięciu magnesu", async ({
    foundry,
  }) => {
    const { page, waitForHydration, getStoreState, assertNoConsoleErrors } = foundry;

    await page.goto("/");
    await waitForHydration();

    // 1. Upewnienie się, że Command Center jest aktywny
    const modBtn = page.locator(".bp6-navbar button:has-text('Command Center')");
    await modBtn.click();

    // 2. Kafelki KPI CityScorecardCards
    await expect(page.locator("text=Konsolidacja Sieci")).toBeVisible();
    await expect(page.locator("text=Popyt Ludnościowy")).toBeVisible();
    await expect(page.locator("text=Rynek RCN")).toBeVisible();
    await expect(page.locator("text=Spójność Audytu DNA")).toBeVisible();

    // 3. Wykres rozkładu klas Stop DNA Recharts
    const chart = page.locator(".recharts-responsive-container");
    await expect(chart).toBeVisible();

    // 4. Lista magnesów miejskich i skok kamery flyTo
    await expect(page.locator("text=Główne Punkty Ciążenia (Top Attractors)")).toBeVisible();
    await expect(page.locator("text=Dworzec PKP Kielce")).toBeVisible();

    // Pobranie pierwszego przycisku lokalizacji i kliknięcie
    const flyToBtn = page.locator("button[title='Pokaż na mapie']").first();
    await flyToBtn.click();

    // Weryfikacja zmiany viewState w store Zustand
    const state = await getStoreState();
    expect(state.viewState.latitude).toBeCloseTo(50.875, 2);
    expect(state.viewState.longitude).toBeCloseTo(20.621, 2);
    expect(state.viewState.zoom).toBe(15);

    // 5. Zero błędów w konsoli
    assertNoConsoleErrors();
  });
});
