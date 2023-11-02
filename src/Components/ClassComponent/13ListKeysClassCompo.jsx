import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListKeysClassCompo extends Component {
    render() {
        // const numbers = [1, 2, 3, 4, 5];
        // const ResponseFromMap = numbers.map((data)=>{
        //     console.log(data);
        //     return data * 2
        // })
        // const Menu = ["Home","About", "Contact","Login"];
        const Menu = {"homepage":"Home","aboutus":"About", "contact":"Contact","singin":"Login"};
        console.log(Object.entries(Menu));
        console.log(Object.keys(Menu));
        console.log(Object.values(Menu));
        const DynamicMenu =Object.entries(Menu).map(([key,val],index)=>{
            console.log(val,key);
            // console.log(data,index);
            // return data * 2
            // return <li key={index}> {data}</li>
            return <li key={index}> <Link to={key}>{val}</Link></li>
        })
        // console.log(ResponseFromMap);
        // const ResponseFromForEach = numbers.forEach(element => {
        //     console.log(element);
        // });
        // console.log(ResponseFromForEach);
        return (
            <>
                {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus eligendi recusandae, laudantium, tenetur natus ea veritatis blanditiis omnis nemo unde nisi ducimus illum est veniam! Omnis provident libero sequi expedita. */}
                <ul>
                    {DynamicMenu}
                    <a href="https://codepen.io/mingshin430/pen/RwPoKy?editors=1010">Slider Reference for json object</a>

                    <pre>
                    const menuItems = [ <br />
                        &#123; <br />
                            &nbsp; title: 'Services', <br />
                            &nbsp; url: '/services', <br />
                            &nbsp; submenu: [ <br />
                                &nbsp;&nbsp;&nbsp; &#123; <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; title: 'web design', <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; url: 'web-design', <br />
                                &nbsp;&nbsp;&nbsp; &#125;, &#123; <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; title: 'web development', <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; url: 'web-dev', <br />
                                &nbsp;&nbsp;&nbsp; &#125;, &#123; <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; title: 'SEO', <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; url: 'seo', <br />
                                &nbsp;&nbsp;&nbsp; &#125;, <br />
                            &nbsp; ], <br />
                        &#125;, <br />
                        // ... <br />
                    ]; <br />
                    </pre>
                </ul>
            </>
        );
    }
}

export default ListKeysClassCompo;