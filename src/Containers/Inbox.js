import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import MailboxStl from '../Themes/Styles/MailboxStl'

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import NavigationService from '../Navigation/NavigationService' 

class Inbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView style={MailboxStl.container}>
        <Card 
          elevation={2}
          style={MailboxStl.card}
        >
          <Card.Title 
            title="Card Title" 
            subtitle="Card Subtitle" 
            left={(props) => <Avatar.Icon {...props} icon="photo" />} 
          />
          <View style={MailboxStl.cardContainer}>
            <Card.Content style={MailboxStl.cardTexts}>
              <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={MailboxStl.cardCover}/>
          </View>
          <Card.Actions>
            <Button
              onPress={() => {
                NavigationService.navigate('MailDetails', {
                  itemId: 86,
                  otherParam: 'anything you want here',
                });
              }}
            >Open</Button>
            <Button>Delete</Button>
          </Card.Actions>
        </Card>

        <Card 
          elevation={2}
          style={MailboxStl.card}
        >
          <Card.Title 
            title="Card Title" 
            subtitle="Card Subtitle" 
            left={(props) => <Avatar.Icon {...props} icon="photo" />} 
          />
          <View style={MailboxStl.cardContainer}>
            <Card.Content style={MailboxStl.cardTexts}>
              <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={MailboxStl.cardCover}/>
          </View>
          <Card.Actions>
            <Button
              onPress={() => {
                NavigationService.navigate('MailDetails', {
                  itemId: 86,
                  otherParam: 'anything you want here',
                });
              }}
            >Open</Button>
            <Button>Delete</Button>
          </Card.Actions>
        </Card>

        <Card 
          elevation={2}
          style={MailboxStl.card}
        >
          <Card.Title 
            title="Card Title" 
            subtitle="Card Subtitle" 
            left={(props) => <Avatar.Icon {...props} icon="photo" />} 
          />
          <View style={MailboxStl.cardContainer}>
            <Card.Content style={MailboxStl.cardTexts}>
              <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={MailboxStl.cardCover}/>
          </View>
          <Card.Actions>
            <Button
              onPress={() => {
                NavigationService.navigate('MailDetails', {
                  itemId: 86,
                  otherParam: 'anything you want here',
                });
              }}
            >Open</Button>
            <Button>Delete</Button>
          </Card.Actions>
        </Card>

        <Card 
          elevation={2}
          style={MailboxStl.card}
        >
          <Card.Title 
            title="Card Title" 
            subtitle="Card Subtitle" 
            left={(props) => <Avatar.Icon {...props} icon="photo" />} 
          />
          <View style={MailboxStl.cardContainer}>
            <Card.Content style={MailboxStl.cardTexts}>
              <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={MailboxStl.cardCover}/>
          </View>
          <Card.Actions>
            <Button>Open</Button>
            <Button>Delete</Button>
          </Card.Actions>
        </Card>

        <Card 
          elevation={2}
          style={MailboxStl.card}
        >
          <Card.Title 
            title="Card Title" 
            subtitle="Card Subtitle" 
            left={(props) => <Avatar.Icon {...props} icon="photo" />} 
          />
          <View style={MailboxStl.cardContainer}>
            <Card.Content style={MailboxStl.cardTexts}>
              <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={MailboxStl.cardCover}/>
          </View>
          <Card.Actions>
            <Button
              
            >Open</Button>
            <Button>Delete</Button>
          </Card.Actions>
        </Card>

      </ScrollView>
    );
  }
}

export default Inbox;
