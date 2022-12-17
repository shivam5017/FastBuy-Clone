import React, { useState } from "react";
import NavBar from "../Components/Navbar";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext"
import {MdShoppingCart} from "react-icons/md"
import {FaPaypal} from "react-icons/fa"
import { useUserAuth } from '../Context/UserAuthContext'
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Grid,
  Heading,
  Highlight,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, StarIcon, TimeIcon } from "@chakra-ui/icons";
import Alert from "../Pages/Alert"
import Timer1 from "../Timer/Timer";
import { Icon } from "@chakra-ui/react";
import { BsShieldCheck } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { Spinner } from '@chakra-ui/react'
import { useEffect } from "react";
const Cart = () => {
  const {arr,removeItem } = useContext(CartContext);
  const [alert,setAlert]=useState(null)
  const {user} =useUserAuth();
  const navigate=useNavigate();
  const price = 1470000.15;
  const [admin,setAdmin]=useState([])

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

  }
  
  

let dollarUSLocale = Intl.NumberFormat('en-US');
let dollarIndianLocale = Intl.NumberFormat('en-IN');

// console.log("US Locale output: " + dollarUSLocale.format(price));
// console.log("Indian Locale output: " + dollarIndianLocale.format(price));

  let prev = arr.reduce((acc, el) => {
    return acc + el.discount;
  }, 0);
  let prevTotal = arr.reduce((acc, el) => {
    return acc + el.price;
  }, 0);
 
  console.log(prev);
  const [max, setMax] = useState(prev);
  const [maxTotal, setMaxTotal] = useState(prevTotal);
  

  function calculate(e, discount, price) {
    setMax( e *  discount);
    setMaxTotal(e * price);
  }
  

  const handleNavigate=()=>{
    navigate("/signup")
  }
   
  

 
const [loading,setLoading]=useState(false)

useEffect(() => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
}, []);

 
 
 const handlecheckout=()=>{
    if(user==null){
      showAlert("Please Login First","danger")
     
      setTimeout(()=>{
        navigate("/login")
      },2000)
      
    }else{
      showAlert("Order Placed","success")
      localStorage.setItem("adminProducts",JSON.stringify(arr))
      localStorage.setItem("buyername",JSON.stringify(user.displayName))
    }

    
  
 }




  const handlePaypal=()=>{

  }

  return (
    <>

    {
        loading ? (
            <Spinner m="auto" justifyContent="center" mt="20%"/>
          ):( <>

            <NavBar />
            <Alert alert={alert}/>
               {
                  arr==""? <Flex  h="fit-content" justifyContent="space-between">
                  <Box lineHeight="2">
                      <Text fontSize="40px" fontWeight="bold" fontFamily="sans-serif" ml="20px">Your Cart</Text>
                      <Text fontSize="25px" fontFamily="sans-serif" ml="90px">Looks like it's empty!</Text>
                      <Text fontSize="20px" fontFamily="sans-serif" ml="80px">Why not add something?</Text>
                  </Box>
                  <Box>
                      <MdShoppingCart size="large"  />
                  </Box>
               </Flex>: <Flex bg="#f0f2f5">
            <Box w="70%" m="40px" mt="20px" h="800px" >
              <Box>
                {arr.map((item) => (
                  <Box h="260px" mt="20px" bg="white" p="10px">
                    <Text fontSize="1rem" fontWeight="bold" fontFamily="sans-serif">
                      <TimeIcon /> Deal ends in <Timer1 />
                    </Text>
                    <Flex pt="10px" h="150px">
                      <Image src={item.image} h="60%"  w="100px"/>
                      <Box w="30%" ml="5%">
                        <Link color="blue" fontSize="15px" fontFamily="sans-serif" fontWeight="bold">
                          {item.title}
                        </Link>
                      </Box>
                      <Box>
                        <RadioGroup defaultValue="1">
                          <Stack>
                            <Radio value="1">
                              <Text fontSize="s">Pickup at North Anchorage</Text>
                              <Link fontSize="s" color="blue">
                                Available Today at a store 6 miles away
                              </Link>
                            </Radio>
                            <Radio value="2">
                              <Text fontWeight="bold" fontSize="s">
                                Shipping to 96939
                              </Text>
                              <Text fontSize="s">Unavailable in this area</Text>
                            </Radio>
                          </Stack>
                        </RadioGroup>
                      </Box>
                      <Stack ml="10%" w="10%" align="left">
                        <select
                          border="1px solid black"
                          placeholder=""
                          onChange={(e) =>
                            calculate(
                              e.target.value,
                              item.discount,
                              item.price,
                          
                            )
                          }
                          
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                        <Button
                          color="blue"
                          variant="link"
                          size="s"
                          ml="10px"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </Button>
                        <Button color="blue" variant="link" size="s" ml="10px">
                          Save
                        </Button>
                      </Stack>
                      <Box ml="10%">
                        <Heading fontSize="l">${item.discount}</Heading>
                        <Text lineHeight="2rem" fontSize="sm" m="0.1rem">
                          <Highlight
                            query="Save %90"
                            styles={{ bg: "red", color: "white" }}
                          >
                            Save %90
                          </Highlight>
                        </Text>
                        <Text lineHeight="0.5rem" fontSize="sm" m="0.1rem">
                          Was{item.price}
                        </Text>
                      </Box>
                    </Flex>
                    <Box h="80px" ml="20%">
                      <Heading fontSize="sm">Protected plans</Heading>
                      <Divider />
                      <Flex p="10px">
                        <Box ml="5%">
                          <Icon as={BsShieldCheck} />
                        </Box>
      
                        <Box ml="10%">
                          <Link color="blue" fontSize="s">
                            2-Year Accidental Geek Squad Replacement
                          </Link>
                          <Box>
                            <Text color="blue" fontSize="s">
                              <StarIcon color="#ffe000" />
                              <StarIcon color="#ffe000" />
                              <StarIcon color="#ffe000" />
                              <StarIcon color="#ffe000" />
                              <StarIcon color="#ffe000" />
                              (324)
                            </Text>
                          </Box>
                          
                        </Box>
                   
                    
                      </Flex>
                    </Box>
                  </Box>
                ))}
                </Box>
              </Box>
              <Box h="650px" w="30%" bg="white">
                <Stack p="2rem" lineHeight="15px">
                  <Heading textAlign="center" fontSize="xl">
                    Order Summary
                  </Heading>
                  <Divider border="1px" />
                  <Flex justifyContent="space-between">
                    <Text fontSize="lg">Original Price</Text>
                    <Text fontSize="lg">${ dollarUSLocale.format(maxTotal)}</Text>
                  </Flex>
                 
                  <Flex justifyContent="space-between">
                    <Text fontSize="lg">Shoping</Text>
                    <Text fontSize="lg">0</Text>
                    {/* <Text fontSize="lg">${+discount}</Text> */}
                  </Flex>
                  <Flex justifyContent="space-between">
                    <Text fontSize="lg">Store Pickup</Text>
                    <Text fontSize="lg">0</Text>
                  </Flex>
                  <Flex justifyContent="space-between">
                    <Link fontSize="lg" color="blue">
                      Estimated Sales Tax
                    </Link>
                    <Text fontSize="lg">0</Text>
                  </Flex>
                  <Divider border="1px" />
                  <Flex justifyContent="space-between">
                    <Heading fontSize="lg">Total</Heading>
                    <Text fontSize="sm">${+max}</Text>
                  </Flex>
                  <Button colorScheme="yellow" color="black" variant="solid" onClick={handlecheckout}>
                    Checkout
                  </Button>
                  <Button colorScheme="facebook" color="white" variant="solid">
                    PayPal <Text as="sup" onClick={handlePaypal}><FaPaypal /></Text>
                  </Button>
                  <Text fontSize="sm">
                    <Link color="blue" onClick={handleNavigate}>Sign in or create an account now </Link> to get
                    My Best Buy™ Points
                  </Text>
                  <Divider border="1px" />
                  <Flex>
                    <Box fontSize="sm" pt="20px">
                      <Image
                        src="https://www.bestbuy.com/~assets/bby/_com/MBBCC_MBBVC_Contactless_Dual_Yellow_Edge_RGB-a32c353844fb660dd08157fcccf95d42.png"
                        h="40%"
                      ></Image>
                      <Text mt="20px">
                        <Link color="blue">Show me how </Link>
                      </Text>
                    </Box>
                    <Box pt="20px">
                      <Heading fontSize="lg">10% back in rewards</Heading>
                      <Text fontSize="x-small">
                        on first day of purchases or flexible financing for new My
                        Best Buy® Credit Cardmembers.
                      </Text>
                    </Box>
                  </Flex>
                  <Divider border="1px" />
                  <Box pt="20px" pb="20px">
                    <Heading fontSize="lg">
                      Looking for a lease to own option?
                    </Heading>
                    <Text fontSize="sm" pt="10px">
                      Enjoy the tech you want today.{" "}
                      <Link color="blue">Learn more </Link>
                    </Text>
                  </Box>
                  <Divider border="1px" />
                </Stack>
              </Box>
            </Flex>
      
               }
      
              
           
            <Footer />
          </>)
    }
   
    </>
  );
};

export default Cart;
