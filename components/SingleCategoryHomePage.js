import CollectionsGrid from "./CollectionsGrid";
import SingleNftComponent from "./SingleNftComponent";

const SingleCategoryHomePage = ({ data, value, index, category }) => {
	return (
		<div>
			<CollectionsGrid>
				{data.map((item) => (
					<SingleNftComponent key={item.id} {...item} />
				))}
			</CollectionsGrid>
		</div>
	);
};

export default SingleCategoryHomePage;
