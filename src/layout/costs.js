import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../redux/actions';
import { postsState$ } from '../redux/selectors';
export default function Costs() {
    const dispatch = useDispatch();
    const posts = useSelector(postsState$);
    console.log('[Costs - posts]', posts);
    React.useEffect(() => {
        dispatch(actions.getPosts.getPostsRequest());
    }, [dispatch]);
    return (

        <div className="container-fluid mt-3">
            <div className="row text-center">
                <div className="col-lg-2 col-md-2 col-xl-2">
                </div>
                <div className="col-lg-8 col-md-8 col-xl-8 border border-2 rounded">
                    <h2>Bảng giá các dịch vụ :</h2>
                    <table className="table table-sm mt-2">
                        <thead>
                            <tr className="table-primary">
                                <th scope="col">Tên dịch vụ</th>
                                <th scope="col">Đơn giá</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((val, key) => {
                                return (
                                    <tr>
                                        <td style={{ float: 'left' }} scope="row">_ {val.name}</td>
                                        <td >{val.cost}</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-2 col-md-2 col-xl-2">

                </div>
            </div>
        </div>
    )
}


