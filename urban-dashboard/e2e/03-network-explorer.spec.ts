import { test, expect } from "./helpers/foundry-test";

test.describe("03 - Network Explorer Module", () => {
  test("powinien obsługiwać Table2, przełączanie Słupki vs Węzły, sortowanie, #Rank, POI, eksport i profil 360°", async ({
    foundry,
  }) => {
    const { page, waitForHydration, getStoreState, assertNoConsoleErrors } = foundry;

    await page.goto("/");
    await waitForHydration();

    // 1. Przejście do modułu Network Explorer
    const modBtn = page.locator(".bp6-navbar button:has-text('Network')");
    await modBtn.click();

    await expect(page.locator("h2:has-text('NETWORK EXPLORER')")).toBeVisible();

    // 2. Wyszukiwarka POI w nagłówku
    const poiInput = page.locator("input[placeholder*='Szukaj POI']");
    await expect(poiInput).toBeVisible();
    await poiInput.fill("Dworzec");
    // Czekamy na podpowiedzi menu
    await expect(page.locator(".bp6-menu-item:has-text('Dworzec PKP Kielce')")).toBeVisible({
      timeout: 5000,
    });
    // Wybór podpowiedzi POI
    await page.locator(".bp6-menu-item:has-text('Dworzec PKP Kielce')").click();
    let state = await getStoreState();
    expect(state.viewState.latitude).toBeCloseTo(50.875, 2);

    // 3. Weryfikacja obecności wirtualizowanej tabeli Table2 słupków
    await expect(page.locator(".bp6-table-container").first()).toBeVisible();
    await expect(page.locator("text=Żytnia I").first()).toBeVisible();

    // 4. Sortowanie kolumny (kliknięcie nagłówka "Słupek Fizyczny")
    const nameHeader = page.locator("span:has-text('Słupek Fizyczny')").first();
    await nameHeader.dispatchEvent("click");
    state = await getStoreState();
    expect(state.stopsOrderBy).toBe("stop_name");

    // 5. Skok do rangi #Rank
    const rankInput = page.locator("input[placeholder='#Rank']").first();
    await rankInput.fill("3");
    const jumpBtn = page.locator("button[title='Skocz do pozycji rankingu']").first();
    await jumpBtn.click();

    // 6. Eksport CSV/JSON menu
    const exportBtn = page.locator("button:has-text('Eksport')").first();
    await exportBtn.click();
    await expect(page.locator(".bp6-menu-item:has-text('Pobierz plik CSV')")).toBeVisible();
    await expect(page.locator(".bp6-menu-item:has-text('Pobierz dane JSON')")).toBeVisible();
    // Zamknięcie menu kliknięciem gdzie indziej
    await page.keyboard.press("Escape");

    // 7. Przełączanie zakładki na Węzły Logiczne (Macro)
    const hubsTab = page.locator("div.bp6-tab:has-text('Węzły Logiczne')");
    await hubsTab.click();
    await expect(page.locator("text=Węzeł Żytnia / Grunwaldzka")).toBeVisible();

    // 8. Otwarcie dolnego profilu 360° przez zaznaczenie wiersza
    const hubCell = page.locator("text=Węzeł Żytnia / Grunwaldzka").first();
    await hubCell.click();

    state = await getStoreState();
    expect(state.isInspectorOpen).toBe(true);
    expect(state.selectionType).toBe("hub");

    // Weryfikacja widoczności inspektora 360°
    await expect(page.locator("span:has-text('WĘZEŁ LOGICZNY (MACRO)')").first()).toBeVisible();
    await expect(page.locator("span:has-text('Węzeł Żytnia / Grunwaldzka')").first()).toBeVisible();

    // 9. Zero błędów konsoli
    assertNoConsoleErrors();
  });
});
