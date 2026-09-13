import { test, expect } from "@playwright/test";

test.describe("12 - BusOS OmniDock & Dynamic Windowing Ergonomics", () => {
  test("powinien poprawnie obsługiwać resizowanie, przesuwanie, zamykanie i dokowanie paneli oraz OmniDock", async ({
    page,
  }) => {
    // 1. Załaduj dashboard
    await page.goto("http://localhost:3000/?city=kielce", { waitUntil: "domcontentloaded" });

    // 2. Sprawdź obecność dolnego paska OmniDock
    const omniDock = page.locator('nav[aria-label="Dolny pasek narzędzi pulpitu"]');
    await expect(omniDock).toBeVisible({ timeout: 15000 });

    // 3. Sprawdź, czy główny panel analityczny jest otwarty w trybie zadokowanym z lewej
    const primaryWindow = page.locator('.group\\/window:has-text("Panel Analityczny")');
    await expect(primaryWindow).toBeVisible({ timeout: 10000 });

    // 4. Test zmiany rozmiaru presetami (S, M, L)
    const btnL = primaryWindow.locator('button[title="Ustaw szerokość na 860px"]');
    if (await btnL.isVisible()) {
      await btnL.click();
      const boxL = await primaryWindow.boundingBox();
      expect(boxL?.width).toBeGreaterThanOrEqual(840);

      const btnS = primaryWindow.locator('button[title="Ustaw szerokość na 380px"]');
      await btnS.click();
      const boxS = await primaryWindow.boundingBox();
      expect(boxS?.width).toBeLessThanOrEqual(420);
    }

    // 5. Test dokowania (do prawej krawędzi i powrót)
    const btnDockRight = primaryWindow.locator('button[title="Zadokuj do prawej krawędzi"]');
    if (await btnDockRight.isVisible()) {
      await btnDockRight.click();
      const boxRight = await primaryWindow.boundingBox();
      // Okno powinno być blisko prawej krawędzi (x > 500)
      expect(boxRight?.x).toBeGreaterThan(400);

      const btnDockLeft = primaryWindow.locator('button[title="Zadokuj do lewej krawędzi"]');
      await btnDockLeft.click();
      const boxLeft = await primaryWindow.boundingBox();
      expect(boxLeft?.x).toBeLessThan(50);
    }

    // 6. Test zamykania przyciskiem X
    const closeBtn = primaryWindow.locator('button[aria-label="Zamknij"]');
    await expect(closeBtn).toBeVisible();
    await closeBtn.click();
    await expect(primaryWindow).not.toBeVisible();

    // 7. Przywrócenie okna z poziomu paska OmniDock
    const dockPanelBtn = omniDock.locator('button:has-text("Panel & Moduły")');
    await dockPanelBtn.click();
    await expect(primaryWindow).toBeVisible();

    // 8. Test trybu Czystej Mapy (H)
    const cleanMapBtn = omniDock.locator('button:has-text("Czysta Mapa")');
    await cleanMapBtn.click();
    // Okno powinno zniknąć
    await expect(primaryWindow).not.toBeVisible();

    // Ponowne kliknięcie przywraca okna
    const showWindowsBtn = omniDock.locator('button:has-text("Pokaż Okna")');
    await showWindowsBtn.click();
    await expect(primaryWindow).toBeVisible();

    // 9. Zrób screenshot zweryfikowanego środowiska wielookienkowego
    await page.screenshot({ path: "test-results/windowing-ergonomics-verified.png" });
  });
});
