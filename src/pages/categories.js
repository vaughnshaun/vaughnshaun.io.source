import React from "react";
import { CategoryList } from "../components/CategoryList";
import { CategoryItem } from "../components/CategoryItem";
import imageLink from '../images/categories/codes-coding-hacker.jpg';
import Layout from "../components/layout";
import SEO from "../components/seo";

const CategoriesPage = () => (
    <Layout>
        <SEO title="Categories" />
        <CategoryList>
            <CategoryItem
                name="Software Engineering"
                imageSrc={imageLink}
                imageAlt="Software Engineering"
            />
        </CategoryList>
    </Layout>
);

export default CategoriesPage;