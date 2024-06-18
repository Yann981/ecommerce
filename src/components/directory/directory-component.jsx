import CategoryItem from '../category-item/category-item-component';
import './directory.styles.scss';

const categories = [
  {
    id: 1,
    title: 'Shoes',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    route: '/shop',
  },
  {
    id: 2,
    title: 'Hats',
    imageUrl: 'https://tinyurl.com/38waxwad',
    route: '/shop',
  },
  {
    id: 3,
    title: 'Jackets',
    imageUrl: 'https://tinyurl.com/yc72krrv',
    route: '/shop',
  },
  {
    id: 4,
    title: 'Mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    route: '/shop',
  },
  {
    id: 5,
    title: 'Womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    route: '/shop',
  },
];

const Directory = ({}) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
