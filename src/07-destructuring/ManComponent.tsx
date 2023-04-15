type StreetTitleType = {
    title: string
}

type StreetType = {
    street: StreetTitleType
}

export type ManType = {
    name: string
    age: number
    lessons: Array<{ technology: string }>
    address: StreetType
}

type PropsType = {
    title: string
    man: ManType
    car: { model: string }
}

const ManComponent = (props: PropsType) => {
    const { title, man: { name }, ...rest } = props;

    return (
        <div>
            <h1>{ title }</h1>
            <hr />
            <div>
                { name }
            </div>
            <div>
                { rest.car.model }
            </div>
        </div>
    );
};

export default ManComponent;