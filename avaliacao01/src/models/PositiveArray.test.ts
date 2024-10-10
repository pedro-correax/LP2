    import { PositiveArray } from './PositiveArray'; // Ajuste o caminho conforme necessário

    describe('PositiveArray', () => {
    let positiveArray: PositiveArray;

    beforeEach(() => {
        positiveArray = new PositiveArray();
    });

    it('should correctly add positive numbers', () => {//deve adicionar números positivos corretamente
        positiveArray.add(10);
        positiveArray.add(20);
        expect(positiveArray.values).toEqual([10, 20]);
    });

    it('should not add negative numbers or zero', () => {//não deve adicionar números negativos ou zero
        positiveArray.add(-5);
        positiveArray.add(0);
        expect(positiveArray.values).toEqual([]);
    });

    it('should allow adding more positive numbers', () => {//deve permitir adicionar mais números positivos
        positiveArray.add(10);
        positiveArray.add(30);
        positiveArray.add(15);
        expect(positiveArray.values).toEqual([10, 30, 15]);
    });

    it('should correctly remove an element by index', () => {//deve remover um elemento pelo índice corretamente
        positiveArray.add(10);
        positiveArray.add(20);
        const removed = positiveArray.remove(1);
        expect(removed).toBe(20);
        expect(positiveArray.values).toEqual([10]);
    });

    it('should return undefined when trying to remove from an invalid index', () => {//deve retornar undefined ao tentar remover com índice inválido
        positiveArray.add(10);
        positiveArray.add(20);
        const removedInvalid = positiveArray.remove(-1);
        expect(removedInvalid).toBeUndefined();
        expect(positiveArray.values).toEqual([10, 20]);

        const removedInvalid2 = positiveArray.remove(5);
        expect(removedInvalid2).toBeUndefined();
        expect(positiveArray.values).toEqual([10, 20]);
    });

    it('should ensure that all elements are positive', () => {//deve garantir que todos os elementos sejam positivos
        positiveArray.add(10);
        positiveArray.add(20);
        const allPositive = positiveArray.values.every(value => value > 0);
        expect(allPositive).toBe(true);
    });

    it('should ensure that all elements are positive', () => {//deve adicionar um número positivo e verificar a lista
        positiveArray.add(5);
        expect(positiveArray.values).toContain(5);
        expect(positiveArray.values).toEqual([5]); 
    });
    });
