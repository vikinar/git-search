import {SyntheticEvent, useCallback, useState} from "react";

import {ReactComponent as SearchIcon} from '../../assets/search-icon.svg'
import classNames from "classnames/bind";
import styles from "./search.module.scss";
import {fetchUserList} from "../../store/search";
import {useAppDispatch} from "../../store";

const cx = classNames.bind(styles)

const Search = () => {
    const [inputVal, setInputVal] = useState('')
    const dispatch = useAppDispatch();

    const handleInput = (e:any) => {
        setInputVal(e.target.value)
    }

    const handleClick = useCallback(() => {
        dispatch(fetchUserList(inputVal));
    }, [inputVal, dispatch])

    const handleEnter = (e:any) => {
        if (e.key === "Enter") {
            dispatch(fetchUserList(inputVal));
        }
    }


    return (
        <section className={cx('search-box')}>
            <input
                className={cx('search-box_input')}
                type="text"
                placeholder="Type username here..."
                onChange={handleInput}
                onKeyDown={handleEnter}
            />
            <button onClick={handleClick} className={cx('btn')}>
                <SearchIcon className={cx('icon')}/>
            </button>
        </section>
    )
}

export default Search;