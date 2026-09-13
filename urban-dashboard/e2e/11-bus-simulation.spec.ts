import { test, expect } from "@playwright/test";

test.describe("11 - Real-time Bus Fleet Simulation", () => {
  test("powinien poprawnie włączyć symulację, wyświetlić dock kontroli oraz obsługiwać mnożnik prędkości", async ({
    page,
  }) => {
    // 1. Otwórz dashboard
    await page.goto("http://localhost:3000/?city=kielce", { waitUntil: "domcontentloaded" });

    // 2. Znajdź przycisk Symulacji w FloatingMapControls
    const simButton = page.locator('button:has-text("Symulacja")');
    await expect(simButton).toBeVisible({ timeout: 15000 });

    // 3. Kliknij w przycisk Symulacji
    await simButton.click();

    // 4. Zweryfikuj, że pojawił się dock kontroli symulacji na dole ekranu
    const dockHeader = page.locator('text=Symulacja Floty • KIELCE');
    await expect(dockHeader).toBeVisible({ timeout: 10000 });

    // 5. Sprawdź obecność przycisku "NA ŻYWO"
    const livePill = page.locator('button:has-text("NA ŻYWO")');
    await expect(livePill).toBeVisible();

    // 6. Sprawdź obecność suwaka prędkości i presetów
    const chip60x = page.getByRole("button", { name: "60x", exact: true });
    await expect(chip60x).toBeVisible();
    await chip60x.click();

    const chip3600x = page.getByRole("button", { name: "3600x", exact: true });
    await expect(chip3600x).toBeVisible();
    await chip3600x.click();

    // 7. Sprawdź obecność wskaźnika floty w trasie
    const fleetStatus = page.locator('text=/w trasie/');
    await expect(fleetStatus).toBeVisible();

    // 8. Sprawdź selektor linii
    const lineSelect = page.locator('select');
    await expect(lineSelect).toBeVisible();

    // 9. Zrób screenshot z działającą symulacją
    await page.screenshot({ path: "test-results/simulation-dock-verified.png" });
  });
});
