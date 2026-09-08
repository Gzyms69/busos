import { test, expect } from "./helpers/foundry-test";

test.describe("05 - Route Analyzer Module", () => {
  test("powinien obsługiwać filtry GTFS, wybór linii, stepper LRS z delta t i analizę prędkości odcinkowych", async ({
    foundry,
  }) => {
    const { page, waitForHydration, getStoreState, assertNoConsoleErrors } = foundry;

    await page.goto("/");
    await waitForHydration();

    // 1. Przejście do modułu Routes
    const modBtn = page.locator(".bp6-navbar button:has-text('Routes')");
    await modBtn.click();

    await expect(page.locator("h2:has-text('ROUTE ANALYZER')")).toBeVisible();

    // 2. Filtry środków transportu (Autobus / Tramwaj / Kolej)
    const busFilterBtn = page.locator("button:has-text('Autobus')");
    await expect(busFilterBtn).toBeVisible();
    await busFilterBtn.click();

    // 3. Tabela katalogu linii i wybór linii
    await expect(page.getByText("34", { exact: true })).toBeVisible();
    await expect(page.locator("text=Zagórze")).toBeVisible();

    // Kliknięcie w linię 34, co automatycznie przełącza na stepper LRS
    const lineCell = page.locator("text=Zagórze").first();
    await lineCell.click();

    let state = await getStoreState();
    expect(state.activeRouteUid).toBe("ztm_34");

    // 4. Stepper sekwencji przystanków i profil LRS
    await expect(page.locator("text=Bukówka Pętla").first()).toBeVisible();
    await expect(page.locator("text=Żytnia I").first()).toBeVisible();
    await expect(page.locator("text=Dworzec Kolejowy").first()).toBeVisible();

    // 5. Zakładka Prędkości Odcinkowe (Edges)
    const edgesTab = page.locator("div.bp6-tab:has-text('Prędkości Odcinkowe')");
    await edgesTab.click();

    await expect(page.locator(".bp6-table-container:visible")).toBeVisible();
    // Weryfikacja alertu wąskiego gardła (<15 km/h, z mocka 13.8 km/h w formacie pl-PL "13,8 km/h")
    await expect(page.locator("text=/13[,.]8 km\\/h/")).toBeVisible();

    // 6. Zero błędów konsoli
    assertNoConsoleErrors();
  });
});
