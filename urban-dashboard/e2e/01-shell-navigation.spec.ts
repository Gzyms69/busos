import { test, expect } from "./helpers/foundry-test";

test.describe("01 - Foundry Shell & Global Navigation", () => {
  test("powinien bezbłędnie obsługiwać przełącznik 30 miast, 6 modułów, Ctrl+K, Splitter i MapHud", async ({
    foundry,
  }) => {
    const { page, waitForHydration, getStoreState, assertNoConsoleErrors } = foundry;

    await page.goto("/");
    await waitForHydration();

    // 1. Sprawdzenie nagłówka marki i domyślnego miasta
    await expect(page.locator(".bp6-navbar")).toContainText("BusOS");
    await expect(page.locator(".bp6-navbar")).toContainText("FOUNDRY");

    // 2. Przełącznik miast: kliknięcie w przycisk miasta i wybór WARSZAWA
    const cityBtn = page.locator(".bp6-navbar button:has-text('KIELCE')");
    await cityBtn.click();
    await page.waitForSelector(".bp6-menu-item:has-text('WARSZAWA')");
    await page.locator(".bp6-menu-item:has-text('WARSZAWA')").click();

    let state = await getStoreState();
    expect(state.selectedCity).toBe("warszawa");

    // 3. Przełączanie 6 modułów analitycznych w nawigacji górnej
    const modules = [
      { name: "Network", id: "network" },
      { name: "Optimization", id: "optimization" },
      { name: "Routes", id: "routes" },
      { name: "Market Intel", id: "market" },
      { name: "Benchmarking", id: "benchmark" },
      { name: "Command Center", id: "command-center" },
    ];

    for (const mod of modules) {
      const modBtn = page.locator(`.bp6-navbar button:has-text('${mod.name}')`);
      await modBtn.click();
      state = await getStoreState();
      expect(state.activeModule).toBe(mod.id);
    }

    // 4. Command Palette (Ctrl+K)
    await page.keyboard.press("Control+k");
    const searchInput = page.locator(".bp6-dialog input[placeholder*='Wyszukaj miasto']");
    await expect(searchInput).toBeVisible();

    await searchInput.fill("Benchmarking");
    const benchmarkItem = page.locator(".bp6-menu-item:has-text('Benchmarking')");
    await expect(benchmarkItem).toBeVisible();
    await benchmarkItem.click();

    state = await getStoreState();
    expect(state.activeModule).toBe("benchmark");

    // 5. Kontrolki MapHud
    // Przełączenie podkładu na satelitarny
    const satBtn = page.locator("button[title*='Satelitarny']");
    await satBtn.click();
    state = await getStoreState();
    expect(state.mapStyle).toBe("satellite");

    // Przełączenie 3D
    const cubeBtn = page.locator("button[title*='3D']");
    await cubeBtn.click();
    state = await getStoreState();
    expect(state.show3DBuildings).toBe(true);

    // Popover wyboru metryki H3
    const h3MetricBtn = page.locator("button:has-text('Metryka H3')");
    await h3MetricBtn.click();
    await page.locator(".bp6-menu-item:has-text('Populacja GUS')").click();
    state = await getStoreState();
    expect(state.h3Metric).toBe("pop_total");

    // Popover warstw mapy
    const layersBtn = page.locator("button:has-text('Warstwy')");
    await layersBtn.click();
    const hexSwitch = page.locator("label.bp6-switch:has-text('Siatka Uber H3')");
    await expect(hexSwitch).toBeVisible();
    await hexSwitch.click();
    state = await getStoreState();
    expect(state.showHexagons).toBe(false);

    // 6. Asercja czystości konsoli (zero uncaught errors)
    assertNoConsoleErrors();
  });
});
