Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@Aayush-Tadhani246 
procodingclass
/
PRO-C144-Project_Solution
Public
Fork your own copy of procodingclass/PRO-C144-Project_Solution
Code
Issues
Pull requests
Actions
Projects
Security
Insights
You’re making changes in a project you don’t have write access to. We’ve created a fork of this project for you to commit your proposed changes to. Submitting a change will write it to a new branch in your fork, so you can send a pull request.
PRO-C144-Project_Solution
/
screens
/
Popular.js
in
procodingclass:master
 

Spaces

2

No wrap
1
import React, { Component } from "react";
2
import {
3
  View,
4
  StyleSheet,
5
  FlatList,
6
  Text,
7
  ImageBackground
8
} from "react-native";
9
import axios from "axios";
10
import { RFValue } from "react-native-responsive-fontsize";
11
import Star from "react-native-star-view";
12
​
13
export default class PopularScreen extends Component {
14
  constructor(props) {
15
    super(props);
16
    this.state = {
17
      data: [],
18
      ngrok_url:""
19
    };
20
  }
21
​
22
  componentDidMount() {
23
    this.getData();
24
  }
25
​
26
  getData = () => {
27
    const url = this.state.ngrok_url+"/popular-articles";
28
    axios
29
      .get(url)
30
      .then(async (response) => {
31
        this.setState({ data: response.data.data });
32
      })
33
      .catch((error) => {
34
        console.log(error.message);
35
      });
36
  };
37
​
38
  keyExtractor = (item, index) => index.toString();
39
​
40
  renderItems = ({ item, index }) => {
41
      return (
42
        <View style={styles.cardContainer}>
43
          <Text style={styles.title}>Article name: {"\n\n"+item.title}</Text>
44
          <Star score={item.total_events} style={styles.starStyle} />
45
        </View>
@Aayush-Tadhani246
Propose changes
Commit summary
Create Popular.js
Optional extended description
Add an optional extended description…
  
 Waiting for your fork…
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
