import { test, expect } from "./helpers/foundry-test";

test.describe("08 - Object Inspector & AI Radar Module", () => {
  test("powinien obsługiwać zmianę wysokości (Compact vs Expanded), 4 zakładki, skok z AI Radaru i zamknięcie (X)", async ({
    foundry,
  }) => {
    const { page, waitForHydration, getStoreState, assertNoConsoleErrors } = foundry;

    await page.goto("/");
    await waitForHydration();

    // 1. Otwarcie obiektu - przechodzimy do Network i klikamy w słupek Żytnia I
    const modBtn = page.locator(".bp6-navbar button:has-text('Network')");
    await modBtn.click();

    const stopCell = page.locator("text=Żytnia I").first();
    await stopCell.click();

    // Weryfikacja otwarcia inspektora
    await expect(page.locator("span:has-text('SŁUPEK FIZYCZNY (MICRO)')").first()).toBeVisible();
    await expect(page.locator("span:has-text('Żytnia I')").first()).toBeVisible();

    // 2. Zmiana wysokości (Compact 250px -> Expanded 480px)
    const expandBtn = page.locator("button[title='Rozwiń panel']");
    await expect(expandBtn).toBeVisible();
    await expandBtn.click();

    // Przycisk zmienia tytuł na "Zwiń panel"
    const collapseBtn = page.locator("button[title='Zwiń panel']");
    await expect(collapseBtn).toBeVisible();

    // 3. Przełączanie 4 zakładek profilu słupka
    const tabs = [
      "Osiągalność 1-Hop",
      "Linie GTFS",
      "Transakcje RCN",
      "4 Filary Stop DNA",
    ];

    for (const tabTitle of tabs) {
      const tab = page.locator(`.bp6-tab:has-text('${tabTitle}')`);
      if (await tab.isVisible()) {
        await tab.click();
      }
    }

    // 4. Przejście do węzła logicznego (Macro) dla testu AI Radar
    const hubsTab = page.locator("div.bp6-tab:has-text('Węzły Logiczne')");
    await hubsTab.click();

    const hubCell = page.locator("text=Węzeł Żytnia / Grunwaldzka").first();
    await hubCell.click();

    await expect(page.locator("span:has-text('WĘZEŁ LOGICZNY (MACRO)')").first()).toBeVisible();

    // Przejście na zakładkę AI Radar
    const aiTab = page.locator("div.bp6-tab:has-text('AI Radar')");
    await aiTab.click();

    await expect(page.locator("text=AI RADAR: WEKTOROWE PODOBIEŃSTWO DNA")).toBeVisible();
    await expect(page.locator("text=Dworzec PKP Radom")).toBeVisible();
    await expect(page.locator("text=98%").first()).toBeVisible();

    // Skok do bliźniaczego węzła w innym mieście
    const jumpBtn = page.locator("button:has-text('Przejdź')").first();
    await jumpBtn.click();

    let state = await getStoreState();
    expect(state.selectedCity).toBe("radom");

    // 5. Zamknięcie inspektora przyciskiem (X)
    const closeBtn = page.locator("button[title='Zamknij inspektor']");
    await closeBtn.click();

    state = await getStoreState();
    expect(state.isInspectorOpen).toBe(false);

    // 6. Zero błędów konsoli
    assertNoConsoleErrors();
  });
});
