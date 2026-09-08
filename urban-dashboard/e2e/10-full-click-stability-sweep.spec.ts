import { test, expect } from "./helpers/foundry-test";

test.describe("10 - Full Interactive Stability Sweep", () => {
  test("powinien sekwencyjnie przejść i kliknąć we wszystkie moduły, widoki i kontrolki, gwarantując console.error === 0", async ({
    foundry,
  }) => {
    const { page, waitForHydration, assertNoConsoleErrors } = foundry;

    await page.goto("/");
    await waitForHydration();

    // 1. Obchód Modułu 1: Command Center
    const ccBtn = page.locator(".bp6-navbar button:has-text('Command Center')");
    await ccBtn.click();
    await page.waitForTimeout(200);

    const magnetItem = page.locator("button[title='Pokaż na mapie']").first();
    if (await magnetItem.isVisible()) {
      await magnetItem.click();
    }

    // 2. Obchód Modułu 2: Network Explorer
    const netBtn = page.locator(".bp6-navbar button:has-text('Network')");
    await netBtn.click();
    await page.waitForTimeout(200);

    // Filtry klas ocen
    for (const g of ["A+", "A", "Wszystkie"]) {
      const gBtn = page.locator(`.bp6-button:has-text('${g}')`).first();
      if (await gBtn.isVisible()) {
        await gBtn.click();
        await page.waitForTimeout(100);
      }
    }

    // Zaznaczenie wiersza słupka
    const stopCell = page.locator(".bp6-table-cell:has-text('Żytnia')").first();
    if (await stopCell.isVisible()) {
      await stopCell.click();
      await page.waitForTimeout(200);
    }

    // Zamknięcie inspektora jeśli otwarty
    const closeInspector = page.locator("button[title='Zamknij inspektor']");
    if (await closeInspector.isVisible()) {
      await closeInspector.click();
    }

    // Przełączenie na zakładkę Hubs
    const hubsTab = page.locator("div.bp6-tab:has-text('Węzły Logiczne')");
    if (await hubsTab.isVisible()) {
      await hubsTab.click();
      await page.waitForTimeout(200);
    }

    // 3. Obchód Modułu 3: Optimization & Policy
    const optBtn = page.locator(".bp6-navbar button:has-text('Optimization')");
    await optBtn.click();
    await page.waitForTimeout(200);

    const pairCell = page.locator(".bp6-table-cell").first();
    if (await pairCell.isVisible()) {
      await pairCell.click();
      await page.waitForTimeout(200);
    }

    const tdiTab = page.locator("div.bp6-tab:has-text('The Investment List')");
    if (await tdiTab.isVisible()) {
      await tdiTab.click();
      await page.waitForTimeout(200);
    }

    // 4. Obchód Modułu 4: Routes
    const routesBtn = page.locator(".bp6-navbar button:has-text('Routes')");
    await routesBtn.click();
    await page.waitForTimeout(200);

    const routeRow = page.locator(".bp6-table-cell:has-text('34')").first();
    if (await routeRow.isVisible()) {
      await routeRow.click();
      await page.waitForTimeout(200);
    }

    const edgesTab = page.locator("div.bp6-tab:has-text('Prędkości Odcinkowe')");
    if (await edgesTab.isVisible()) {
      await edgesTab.click();
      await page.waitForTimeout(200);
    }

    // 5. Obchód Modułu 5: Market Intel
    const marketBtn = page.locator(".bp6-navbar button:has-text('Market Intel')");
    await marketBtn.click();
    await page.waitForTimeout(200);

    const trendsTab = page.locator("div.bp6-tab:has-text('Trendy Cenowe')");
    if (await trendsTab.isVisible()) {
      await trendsTab.click();
      await page.waitForTimeout(200);
    }

    const txTab = page.locator("div.bp6-tab:has-text('Rejestr Aktów')");
    if (await txTab.isVisible()) {
      await txTab.click();
      await page.waitForTimeout(200);
    }

    // 6. Obchód Modułu 6: Benchmarking
    const benchBtn = page.locator(".bp6-navbar button:has-text('Benchmarking')");
    await benchBtn.click();
    await page.waitForTimeout(200);

    const compareTab = page.locator("div.bp6-tab:has-text('Porównywarka Miast')");
    if (await compareTab.isVisible()) {
      await compareTab.click();
      await page.waitForTimeout(200);
    }

    const distTab = page.locator("div.bp6-tab:has-text('Rozkład Kwantylowy')");
    if (await distTab.isVisible()) {
      await distTab.click();
      await page.waitForTimeout(200);
    }

    // 7. Obchód MapHud
    const satBtn = page.locator("button[title*='Satelitarny']");
    if (await satBtn.isVisible()) await satBtn.click();

    const vectorBtn = page.locator("button[title*='Ciemny podkład']");
    if (await vectorBtn.isVisible()) await vectorBtn.click();

    // 8. Ostateczny i bezwzględny audyt konsoli: 0 nieschwytanych błędów
    assertNoConsoleErrors();
  });
});
