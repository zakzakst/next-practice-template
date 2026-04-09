import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "@/components/ui/button";

describe('Sample', () => {
  test('サンプルのテスト', async () => {
    const clickMock = vi.fn();
    render(<Button onClick={clickMock}>ボタン</Button>)

    const button = screen.getByRole('button', { name: "ボタン" })
    await fireEvent.click(button);

    expect(screen.getByText('ボタン')).toBeInTheDocument();
    expect(clickMock).toHaveBeenCalled()
  })
})