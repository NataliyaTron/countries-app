import React, { FC } from "react";
import Meta from "antd/es/card/Meta";
import { HeartFilled } from "@ant-design/icons";
import { Card } from "antd";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../toolkitRedux/store";
import { decrementLikes, incrementLikes } from "../../toolkitRedux/likeSlice";

interface ICountryCardProps {
    img: string;
    title: string;
    link: string;
}

const CountryCard: FC<ICountryCardProps> = ({ img, title, link }) => {
    const likes = useSelector((state: RootState) => state.likes);
    const isLiked = likes.includes(title);
    //const isLiked = useSelector((state: RootState) => state.likes);
    const dispatch = useDispatch();

    const handleLike = () => {
        if (isLiked) {
            dispatch(decrementLikes());
        } else {
            dispatch(incrementLikes());
        }
    };

    return (
        <Card
            className={"country-card"}
            hoverable
            key={Math.random()}
            cover={<img alt="example" src={img} />}
        >
            <Meta title={title} description={link} />
            <div className={"country-card__like-wrapper"}>
                <HeartFilled
                    className={
                        isLiked
                            ? "country-card__like-icon liked"
                            : "country-card__like-icon"
                    }
                    onClick={handleLike}
                />
            </div>
        </Card>
    );
};

export default CountryCard;
