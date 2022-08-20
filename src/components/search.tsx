import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { useLazyGetWordQuery } from "../redux/api/searchWord"
import { useAppSelector } from "../redux/hooks"
import { addElement, changeResults, selectSearchList } from "../redux/reducers/searchSlice"

const Search = (): JSX.Element => {
    const dispatch = useDispatch()
    const SearchElement = useAppSelector(selectSearchList)

    const [trigger] = useLazyGetWordQuery()

    const [isSearched, setSearched] = useState(false)
    const input = useRef<HTMLInputElement>(null)

    const submit = async () => {
        setSearched(false)
        if (input.current?.value) {
            if (SearchElement.includes(input.current.value)) setSearched(true)
            try {
                const res = await trigger(input.current.value).unwrap()
                dispatch(changeResults(res))
                if (!SearchElement.includes(input.current.value)) dispatch(addElement(input.current.value))
            } catch (error) {
                console.error(error)
                alert("Not Found")
            }
        }
    }

    return <>
        <div className="w-full block">
            <div className="flex items-center justify-between space-x-4 py-4">
                <input ref={input} type="text" placeholder="Please enter the word" className="inline-block w-full border outline-none border-solid px-2 border-[#e0e0e5] rounded-md py-2" />
                <button onClick={submit} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Find
                </button>
            </div>
        </div>
        {isSearched && <div className="w-full text-red-500 text-center mb-2">
            Axtarılıb
        </div>}
    </>
}

export default Search