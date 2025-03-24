import Image from "next/image";

export default function MealCard({ meal }) {
    if (!meal) return null;

    const ingredients = Array.from({ length: 20 }, (_, i) => {
        const ingredient = meal[`strIngredient${i + 1}`];
        const measure = meal[`strMeasure${i + 1}`];
        return ingredient ? `${measure} ${ingredient}` : null;
    }).filter(Boolean);

    return (
        <div className="card w-full mx-auto bg-purple-100 shadow-xl">
            <figure>
                <Image
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    width={400}
                    height={250}
                    className="rounded-lg object-cover pt-10"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-bold">{meal.strMeal}</h2>
                <p className="text-sm text-gray-500">{meal.strCategory} | {meal.strArea}</p>
                <h3 className="font-semibold text-lg mt-2">Ingredients:</h3>
                <ul className="list-disc list-inside text-sm text-gray-700">
                    {ingredients.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <h3 className="font-semibold text-lg mt-3">Instructions:</h3>
                <p className="text-sm text-gray-700 line-clamp-4 overflow-auto">{meal.strInstructions}</p>
                {meal.strYoutube && (
                    <div className="card-actions justify-end mt-4">
                        <a
                            href={meal.strYoutube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn  bg-purple-400 w-full"
                        >
                            Watch on YouTube
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
