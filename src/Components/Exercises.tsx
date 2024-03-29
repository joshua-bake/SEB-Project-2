import React from 'react'
import VideoLibrary from './VideoLibrary';
import Collection from './Collection';
import ScrollToTop from 'react-scroll-to-top'

interface Exercises {
    name: string,
    gifUrl: string,
    instructions: string,
    bodyPart: string,
    target: string,
    secondaryMuscles: string
}

const Exercises = () => {

    const exercisesOptions = {
        method: 'GET',
        // params: { limit: '30' },
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    const [exercises, setExercises] = React.useState<null | Array<Exercises>>(null)
    const [search, setSearch] = React.useState('')

    React.useEffect(() => {
        async function fetchData() {
            const resp = await fetch('https://exercisedb.p.rapidapi.com/exercises?limit=1400', exercisesOptions)
            const exercises = await resp.json()
            setExercises(exercises)
        }
        fetchData()
    }, [])

    // console.log(exercises)

    // Search function
    function handleChange(e: any) {
        setSearch(e.currentTarget.value)
    }

    function moreFilter() {
        return exercises?.filter(library => {
            return library.target.toLowerCase().includes(search.toLowerCase())
        })
    }

    function filterLibrary() {
        return exercises?.filter(library => {
            return library.name.toLowerCase().includes(search.toLowerCase())
        })
    }

    if (!exercises) {
        return <div>
            <div className="lds-ripple"><div></div><div></div></div>
        </div>
    }

    return <section className='section'>
        <section>
            <h2 className='is-size-3 has-text-centered'>Click on the cards below to view more or search for a specific exercise.</h2> <br />
        </section>
        <div className='container'>
            <input className='input mb-4' placeholder='Search Exercises' onChange={handleChange} value={search} />
            <div className='columns is-multiline'>
                {filterLibrary()?.map(library => {
                    return <div className='column is-one-quarter-desktop is-one-third-tablet'>
                        <VideoLibrary
                            name={library.name}
                            image={library.gifUrl}
                            instruction={library.instructions}
                            targets={library.target}
                            secondaryTargets={library.secondaryMuscles}
                        />
                    </div>
                })}
            </div>
            <div className='columns is-multiline'>
                {moreFilter()?.map(library => {
                    return <div className='column is-one-quarter-desktop is-one-third-tablet'>
                        <VideoLibrary
                            name={library.name}
                            image={library.gifUrl}
                            instruction={library.instructions}
                            targets={library.target}
                            secondaryTargets={library.secondaryMuscles}
                        />
                    </div>
                })}
            </div>
        </div>
        <div>
            <ScrollToTop />
        </div>
    </section>
}

export default Exercises