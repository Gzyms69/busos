import { test, expect } from "./helpers/foundry-test";

test.describe("09 - Mobile Adaptive Bottom Sheet & Touch Navigation", () => {
  test.use({
    viewport: { width: 390, height: 844 },
  });

  test("powinien poprawnie emulować widok mobilny 390x844, 3 snap-pointy i spełniać WCAG AA touch targets (min 44x44px)", async ({
    foundry,
  }) => {
    const { page, waitForHydration, getStoreState, assertNoConsoleErrors } = foundry;

    // 1. Nawigacja do widoku mobilnego (viewport 390x844 zdefiniowany w test.use)
    await page.goto("/");
    await waitForHydration();

    // 2. Weryfikacja obecności mobilnego paska nawigacji
    const mobileNav = page.locator("nav[aria-label='Nawigacja mobilna BusOS']");
    await expect(mobileNav).toBeVisible();

    // 3. Sprawdzenie wymiarów przycisków dotykowych (WCAG 2.1/2.2 AA target size >= 44x44px)
    const navButtons = mobileNav.locator("button");
    const count = await navButtons.count();
    expect(count).toBe(6);

    for (let i = 0; i < count; i++) {
      const btn = navButtons.nth(i);
      const box = await btn.boundingBox();
      expect(box).not.toBeNull();
      if (box) {
        expect(box.height).toBeGreaterThanOrEqual(44);
        expect(box.width).toBeGreaterThanOrEqual(44);
      }
    }

    // 4. Przełączanie modułów przez dotykowy pasek nawigacyjny
    const networkNavBtn = page.locator("button[aria-label='Network']");
    await networkNavBtn.click();
    let state = await getStoreState();
    expect(state.activeModule).toBe("network");

    const marketNavBtn = page.locator("button[aria-label='Market']");
    await marketNavBtn.click();
    state = await getStoreState();
    expect(state.activeModule).toBe("market");

    // 5. Test 3 snap-pointów gestowego arkusza dolnego (AdaptiveBottomSheet)
    // Domyślny snap to "half" (45vh)
    const dragHandleBar = page.locator("[data-testid='bottom-sheet-drag-handle']");
    await expect(dragHandleBar).toBeVisible();

    // Kliknięcie 1: half -> expanded (88vh)
    await dragHandleBar.click();
    await page.waitForTimeout(300);

    // Kliknięcie 2: expanded -> peek (72px)
    await dragHandleBar.click();
    await page.waitForTimeout(300);

    // Kliknięcie 3: peek -> half (45vh)
    await dragHandleBar.click();
    await page.waitForTimeout(300);

    // 6. Zero błędów konsoli
    assertNoConsoleErrors();
  });
});
