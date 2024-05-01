import { Button } from '@nextui-org/react';

export default function ModifyNumbers({ callBackSetter, numberTemp }) {

    function substraction(numberToSubstract) {
        if(numberToSubstract>=1){
            return numberToSubstract - 1
        }
        return numberToSubstract
    }
    return (
        <div className='flex justify-start'>
            <Button
                isIconOnly
                color='danger'
                aria-label='Like'
                onClick={() => {
                    callBackSetter(numberTemp + 1);
                }}
            >
                +
            </Button>
            <input
                className='border-2 border-black rounded-lg p-2 w-40 mr-4 ml-4'
                type='number'
                value={numberTemp}
                onChange={(e) => {
                    callBackSetter(parseInt(e.target.value));
                }}
                min={0}
            />

            <Button
                isIconOnly
                color='danger'
                aria-label='Like'
                onClick={() => {
                    callBackSetter(substraction(numberTemp));
                }}
            >
                -
            </Button>
        </div>
    );
}
