import {Equipment, EquipmentType} from "../../src/Inventory.js"

describe("Inventory", () => {
    test("creates a piece of equipment", () => {
        expect(new Equipment(EquipmentType.FIREPIT).type).toBe(EquipmentType.FIREPIT)
    })
})