import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections: [
                {
                title: 'hats',
                imageUrl: 'http://picture-cdn.wheretoget.it/t2wp3d-l-610x610-hat-boy-cap-swag-vans-love-vans+wall-purple-pink.jpg',
                id: 1,
                linkUrl: 'shop/hats'
                },
                {
                title: 'jackets',
                imageUrl: 'https://planet-sports-res.cloudinary.com/images/t_ps_xxl/planetsports/products/54468300_00/nike-sb-shield-seasonal-jacket-men-blue-yellow.jpg',
                id: 2,
                linkUrl: 'shop/jackets'
                },
                {
                title: 'sneakers',
                imageUrl: 'http://getwallpapers.com/wallpaper/full/2/8/3/1382860-yeezy-wallpapers-3840x2160-for-iphone-5s.jpg',
                id: 3,
                linkUrl: 'shop/sneakers'
                },
                {
                title: 'womens',
                imageUrl: 'https://i.pinimg.com/originals/cc/c0/8b/ccc08ba49bebfbaac6732ef7167579d1.jpg',
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens'
                },
                {
                title: 'mens',
                imageUrl: 'https://images.unsplash.com/photo-1550995694-3f5f4a7e1bd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
                }
            ]
        };

    }

    render(){
        return(
            <div className="directory-menu">
                {this.state.sections.map(({title, imageUrl, id, size}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}></MenuItem>
                ))}
            </div>
        )
    }

}

export default Directory;