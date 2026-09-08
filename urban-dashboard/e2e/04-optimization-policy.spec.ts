import { test, expect } from "./helpers/foundry-test";

test.describe("04 - Optimization & Policy Audit Module", () => {
  test("powinien obsługiwać suwak TCRP 100, kalkulator oszczędności PLN, wektor kanibalizacji na mapie i tabelę pustyń TDI", async ({
    foundry,
  }) => {
    const { page, waitForHydration, getStoreState, assertNoConsoleErrors } = foundry;

    await page.goto("/");
    await waitForHydration();

    // 1. Przejście do modułu Optimization
    const modBtn = page.locator(".bp6-navbar button:has-text('Optimization')");
    await modBtn.click();

    await expect(page.locator("h2:has-text('OPTIMIZATION & POLICY')")).toBeVisible();

    // 2. Weryfikacja The Axe List i kalkulatora oszczędności PLN
    await expect(page.locator("text=Redukcja Zbędnych Słupków (TCRP 100)")).toBeVisible();
    await expect(page.locator("text=Potencjał oszczędności:")).toBeVisible();
    await expect(page.getByText("92", { exact: true })).toBeVisible(); // 92 słupki z mocka

    // 3. Suwak TCRP 100
    const sliderHandle = page.locator(".bp6-slider-handle").first();
    await expect(sliderHandle).toBeVisible();

    // 4. Kliknięcie pary kanibalizującej w tabeli
    await expect(page.locator("text=Grunwaldzka Szpital II")).toBeVisible();
    const pairCell = page.locator("text=Grunwaldzka Szpital II").first();
    await pairCell.click();

    // Weryfikacja aktywacji wektora kanibalizacji w store
    let state = await getStoreState();
    expect(state.selectedAxePair).not.toBeNull();
    expect(state.selectedAxePair?.redundant_stop_name).toBe("Grunwaldzka Szpital II");
    expect(state.selectedAxePair?.dominant_stop_name).toBe("Żytnia I");

    // 5. Przełączenie na zakładkę The Investment List (Pustynie TDI)
    const investmentTab = page.locator("div.bp6-tab:has-text('The Investment List')");
    await investmentTab.click();

    await expect(page.locator("text=Zidentyfikowane Pustynie TDI")).toBeVisible();
    await expect(page.locator(".bp6-table-container:visible")).toBeVisible();

    // Kliknięcie w komórkę pustyni transportowej
    const tdiCell = page.locator("text=881e2856d5fffff").first();
    await tdiCell.click();

    state = await getStoreState();
    expect(state.selectionType).toBe("hex");
    expect(state.selectedId).toBe("881e2856d5fffff");
    expect(state.h3Metric).toBe("transit_desert");

    // 6. Zero błędów w konsoli
    assertNoConsoleErrors();
  });
});
