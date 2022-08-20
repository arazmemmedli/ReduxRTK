import { useAppSelector } from "../redux/hooks";
import { selectResults } from "../redux/reducers/searchSlice";
import { Word } from "../types/api";

const DisplayList = () => {
    const results = useAppSelector(selectResults)

    return <div className="flex flex-row flex-wrap">
        {results.map(word => <Card word={word} />)}
    </div>
}

const Card = ({ word }: { word: Word }) => {
    const res = word.meanings.map(p => p.definitions).reduce((a, c) => {
        a += `${c.reduce((acc, current) => acc += `${current.definition}\n`, '')}\n`
        return a;
    }, '')

    return (
        <div className="shadow-[0_0.5rem_1rem_rgba(0,0,0,0.2)] p-6 flex flex-col gap-3 mb-3">
            <p>{word.word}</p>
            <p >{res}</p>
            <p>{word.meanings.map(p => p.partOfSpeech).join(", ")}</p>
            <p>{word.phonetics.map(p => p.text).join(", ")}</p>
            <div className="flex flex-col gap-2">
                {word.phonetics.filter(p => p.audio).map(p => <audio src={p.audio} controls />)}
            </div>
            <div className="max-w-full w-[inherit]">
            </div>
        </div>
    )
}

export default DisplayList;