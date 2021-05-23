import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import { Button } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";


function Products(props) {
  console.log(props)
  return (
    <>
    <p style={{marginLeft:'47%',fontSize:'25px'}}>{props.active}</p>
    <Grid item sm={5} style ={{display: 'grid',
      gridColumnGap: '50px',
      gridTemplateColumns: 'auto auto auto'}}>
          
    {props.products.map((product) => {
      if (props.active === product.category) {
        return (
         
            <Card
            style={{ boxShadow:` 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 50px 80px rgba(0, 0, 0, 0.12)`, borderRadius:'10px', width: "18rem" ,marginTop : '10px', marginLeft:'100%', border:'1px solid gray'}}
            className={`cards ${product.name}`}
            key={product.name}
          >
            <CardMedia className={"img"} image={product.img} />
            <img alt={product.name} src={product.image}  width="150" height="120" style ={{marginLeft:'60px',marginTop:'10px'}}></img>
            <CardContent><h2>{product.name}</h2></CardContent>
            <CardContent style={{marginTop:'-20px'}}>Price : {product.price}$</CardContent>
            <CardContent style={{marginTop:'-20px'}}>In Stock : {product.count}</CardContent>
            <section className="btnn">
              <Button variant="light" style = {{border:'1px solid gray',width:'143.7px'}}>ADD TO CART</Button>
              <Button variant="light" style = {{border:'1px solid gray',width:'143.7px'}}>VIEW DETAILS</Button>
            </section>
          </Card>
          )
        }else{
          return ''
        }
      })}
    </Grid>
  </>
  )
}

const mapStateToProps = (state) => {
    console.log(state);
  return { active: state.categories.active, products: state.products.products};
};


export default connect(mapStateToProps)(Products);
