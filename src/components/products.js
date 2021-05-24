import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import { Button } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { If } from 'react-if';
import { addProduct } from '../store/cart-reducer';


function Products(props) {
  // console.log(props)
  return (
    <>
      <p style={{ marginLeft: '47%', fontSize: '25px' }}>{props.active}</p>
      <Grid item sm={5} style={{
        display: 'grid',
        gridColumnGap: '50px',
        gridTemplateColumns: 'auto auto auto'
      }}>

        {props.products.map((product, index) => {

          product.index = index;

          return (
            <If key={product.name} condition={props.active !== ''}>

              <Card
                style={{
                  boxShadow: ` 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 50px 80px rgba(0, 0, 0, 0.12)`, borderRadius: '10px', width: "19rem", marginTop: '5%', marginLeft: '80%', border: '3px solid black', zIndex: "3"
                }}
                className={`cards ${product.name}`}
                key={product.name}
              >
                <CardMedia className={"img"} image={product.img} />
                <img alt={product.name} src={product.image} width="150" height="120" style={{ marginLeft: '60px', marginTop: '10px' }}></img>
                <CardContent><h2>{product.name}</h2></CardContent>
                <CardContent style={{ marginTop: '-20px' }}>Price : {product.price}$</CardContent>
                <CardContent style={{ marginTop: '-20px' }}>In Stock : {product.count}</CardContent>
                <section className="btnn">
                  <Button variant="contained" onClick={() => props.addProduct(product)} style={{ border: '1px solid gray', width: '130px', background: "black", color: "#ffff", margin: "3%" }}>ADD TO CART</Button>
                  <Button variant="contained" style={{ border: '1px solid gray', width: '130px', margin: "3%" }}>VIEW DETAILS</Button>
                </section>
              </Card>
            </If>

          )
        })}
      </Grid>
    </>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return { active: state.categories.active, products: state.products.products };
};

const mapDispatchToProps = { addProduct };


export default connect(mapStateToProps, mapDispatchToProps)(Products);
