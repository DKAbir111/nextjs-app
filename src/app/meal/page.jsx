

import MealCard from "./components/MealCard"
import SearchMeal from "./components/SearchMeal"

export default async function MealPage({ searchParams }) {
    const query = await searchParams
    console.log(query.search)
    const dataFetch = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`)
            const data = await res.json()
            // setMeals(data?.meals || [])
            return data?.meals || []
        }
        catch (error) {
            console.log(error)
            return []
        }
    }
    const meals = await dataFetch()
    return (
        <div className="mt-20 px-5">
            {/* input for search */}

            <SearchMeal />
            {/* meal */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {
                    meals.map(meal => <MealCard key={meal.idMeal} meal={meal} />)
                }
            </div>


        </div>
    )
}
