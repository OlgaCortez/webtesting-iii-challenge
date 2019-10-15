// Test away!
import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import Controls from './Controls';

describe ('<Controls />', () => {
    it("open and unlocked", () => {
        const mock = jest.fn();
        const {queryByText} = render(<Controls closed={false} locked={false} toggleClosed={mock} />)
        const lockedButton = queryByText("Lock Gate");
        expect(lockedButton.disabled).toBe(true)
        const closeButton = queryByText("Close Gate");
        expect(closeButton.disabled).toBe(false)
        fireEvent.click(closeButton);
        expect(mock).toBeCalled()
})
    it("closed and unlock", () => {
        const mock = jest.fn();
        const {queryByText} = render(<Controls locked={false} closed={true} toggleClosed={mock} />)
        const lockedButton = queryByText("Lock Gate");
        expect(lockedButton.disabled).toBe(true)
        const openButton = queryByText("Open Gate");
        expect(openButton.disabled).toBe(false)
        fireEvent.click(openButton);
        expect(mock).toBeCalled()
  })
    it("closed and locked", () => {
        const mock = jest.fn();
        const {queryByText} = render(<Controls locked={true} closed={true} toggleLocked={mock} />)
        const unlockedButton = queryByText("Unlock Gate");
        expect(unlockedButton.disabled).toBe(false)
        const openButton = queryByText("Open Gate");
        expect(openButton.disabled).toBe(false)
        fireEvent.click(unlockedButton);
        expect(mock).toBeCalled()
  })

})