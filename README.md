# Rotkehlchen

<img src="https://raw.githubusercontent.com/rotkehlchenio/rotkehlchen/master/ui/images/rotkehlchen_no_text.png" width="250">

Rotkehlchen is an asset management and accounting application specializing in Crypto assets and aims to also help with tax reporting. It is integrated with multiple exchanges and more will come soon.

## Table of Contents

- [Installation](https://github.com/rotkehlchenio/rotkehlchen#installation)
    - [Linux](https://github.com/rotkehlchenio/rotkehlchen#linux)
	- [OSX](https://github.com/rotkehlchenio/rotkehlchen#osx)
- [Usage](https://github.com/rotkehlchenio/rotkehlchen#usage)
    - [Signin/Signup](https://github.com/rotkehlchenio/rotkehlchen#signin-signup)
    - [Changing the Profit Currency](https://github.com/rotkehlchenio/rotkehlchen#changing-the-profit-currency)
    - [Adding Exchanges](https://github.com/rotkehlchenio/rotkehlchen#adding-exchanges)
    - [Adding Fiat Balances](https://github.com/rotkehlchenio/rotkehlchen#adding-fiat-balances)
    - [Adding And Removing Blockchain Accounts](https://github.com/rotkehlchenio/rotkehlchen#adding-and-removing-blockchain-accounts)
    - [Adding And Removing Ethereum Tokens](https://github.com/rotkehlchenio/rotkehlchen#adding-and-removing-ethereum-tokens)
    - [Manually Adding Trades Or Taxable Events](https://github.com/rotkehlchenio/rotkehlchen#manually-adding-trades-or-taxable-events)
    - [Creating a Tax Report](https://github.com/rotkehlchenio/rotkehlchen#creating-a-tax-report)
- [Wanna Help?](https://github.com/rotkehlchenio/rotkehlchen#wanna-help)
    - [Contribute](https://github.com/rotkehlchenio/rotkehlchen#contribute)
    - [Get Premium](https://github.com/rotkehlchenio/rotkehlchen#get-premium----coming-soon)
    - [Donate](https://github.com/rotkehlchenio/rotkehlchen#donate)


## Installation

For now only source installation for Linux and OSX is supported. This will change soon and Windows will be added but also easier to install methods will be provided.

Rotkehlchen needs Python3 in order to function.

### Linux

Make sure you have [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/). If you don't, use your linux distro's package manager to get them.

Get [zeromq](http://zeromq.org/) using the package manager of your distro. For example here is the package in [Archlinux](https://www.archlinux.org/packages/community/x86_64/zeromq/) and in [Ubuntu](https://packages.ubuntu.com/source/trusty/libs/zeromq).

Also get [sqlcipher](https://www.zetetic.net/sqlcipher/):

- If you're running Archlinux you can install the [package](https://www.archlinux.org/packages/community/x86_64/sqlcipher/) with `pacman`.

- If you're running Ubuntu you will need to install [libsqlcipher-dev](https://packages.ubuntu.com/trusty/libdevel/libsqlcipher-dev) with `apt-get` instead.

Install electron and any other npm dependencies by:

```
npm install --runtime=electron --target=1.8.4
```

Create a new [virtual environment](http://docs.python-guide.org/en/latest/dev/virtualenvs/) to install all the python dependencies. If you don't have `mkvirtualenv` then check how to get it depending on your distribution. [Here](http://exponential.io/blog/2015/02/10/install-virtualenv-and-virtualenvwrapper-on-ubuntu/) is a guide for Ubuntu and [here](https://wiki.archlinux.org/index.php/Python/Virtual_environment) is one for ArchLinux.

```
mkvirtualenv rotkehlchen
```

Then install all the python requirements by doing:

```
pip install -r requirements.txt
```


Now to start the application you need to type `npm start`.

### OSX


The &lt;tldr&gt; version is:
- install sqlcipher
- use a virtual env with python 3.6.x
- make sure pip installed everything it says it installed
- get your node under control with nvm, i tested 8.9

The following recipe has been tested using [Anaconda](https://conda.io). [VirtualEnv](https://virtualenv.pypa.io) works as well, refer to the documentations of those projects to install and use them.

Rotkehlchen uses an encrypted database called [SQLCipher](https://www.zetetic.net/sqlcipher/). Before we can proceed, we need to install it. Homebrew makes it simple:

	$ brew update && brew install sqlcipher

If you wish to use Conda, use the following commands:

	$ brew cask install caskroom/cask/anaconda
	$ echo "export PATH=$PATH:/usr/local/anaconda3/bin" >> ~/.bash_profile
	$ echo ". /usr/local/anaconda3/etc/profile.d/conda.sh" >> ~/.bash_profile
	$ source ~/.bash_profile
	$ conda create python=3.6 --name rotkehlchen
	$ conda activate rotkehlchen

Before using `pip`, let´s ensure we have the latest version:

	$ pip install --upgrade pip

Install all the requirements:

	$ sudo pip install -r requirements.txt

Rotkehlchen uses electron, we need to install it:

	$ npm install --runtime=electron --target=1.8.4

Almost there, we can now install all the NodeJS dependencies. Using a recent NodeJS version such as 8.9.x, it should be smooth

	$ npm install

You now deserved to start Rotkehlchen:

	$ npm start

## Usage

In this section we are going to see how to use various parts of the Rotkehlchen application.

### Signin/Signup

When you start Rotkehlchen you are greeted with a signin/signup prompt.

If you have never created an account before press "Create New Account". Provide a username and a password. Don't forget this password. It will be used to encrypt all your local files. If you have purchased a premium subscription you can also add the API Key and secret here.

If you already have an account just write the name and the password here.

All accounts are created in the rotkehlchen directory which is located in: `$HOME/.rotkehlchen`. Each user has his own subdirectory.

### Changing the Profit Currency

Rotkehlchen calculates everything, including your profit/loss for your tax report into a given FIAT currency. This is what we call the `profit_currency`. By default this is the US Dollar. You can easily change this setting by clicking on the currency icon the top right menu and changing it to the currency you are using.

### Adding Exchanges

You can integrate rotkehlchen with many different exchanges. Currently supported exchanges are: Kraken, Poloniex, Bittrex and Binance.

To do so you have to go to your exchange and create an API key. If the exchange allows it make sure that the API Key only has reading/querying permissions to your account and nothing else.

Click the Person Icon on the top right menu and then choose "User Settings". This will take you to your user settings page. Under the exchange settings sections, select your exchange from the dropdown menu. Then copy and paste the `API Key` and the `API Secret` in the respective text fields and press submit.

If all went well, then you will get a confirmation that the connection was succesfull. If not please doublecheck that the key and secret are correct.

### Adding Fiat Balances

Rotkehlchen is an asset management application. Thus you can track all your assets in one place including the FIAT balances you have.

To add or modify the amount of an owned FIAT currency, go to the user settings page, scroll down to the "Fiat Balances" section and choose the currency from the dropdown menu. Input the modified balance in the text box and press the Modify button.

### Adding and Removing Blockchain Accounts

Rotkehlchen allows to track balances of blockchain accounts.

To track an account go to the user settings page, scroll down to the "Blockchain Balances" section and choose the blockchain from the dropdown menu. For now only Bitcoin and Ethereum chains are supported. Then type or paste the address in the "Account" textbox and press the "Add" Button.

To stop tracking a particular account scroll down to the accounts tables and simply right click on the account you want to stop tracking and select "Delete" from the context menu.

### Adding and Removing Ethereum Tokens

Rotkehlchen will check all of your ethereum accounts for balances of a given list of tokens. This list can be provided and modified by you.

To do so go to the user settings page, scroll down to the "Blockchain Balances" section and look at the "Select Eth Tokens to Track" multiselection widget.

In order to add a token to the tracked tokens find it on the left menu and click it so that it gets added to your tokens.

In order to stop tracking a tocken, find it on the right menu and click it to stop tracking it.

All account balances will be updated at this point.

### Manually Adding Trades Or Taxable Events

Rotkehlchen will pull all your trade history from the exchanges whenever it needs it. But most of us have probably also done some OTC trades or taxable events at some point. Such events could even just be mining tokens, depending on your jurisdiction, participating in an ICO or getting paid in crypto.

On the left menu click on the trades button and select "OTC Trades" from the dropdown menu. This will take you to the OTC Trades page.

To add a new trade or taxable event, fill in all the field and press the "Add Trade" button.

Some very important things to note. All pairs should be in the form of `BASECURRENCY_QUOTECURRENCY`. For a `buy` this means you are buying `amount` of the `BASE` currency at a price of `rate` `QUOTE` currency per `BASE`. For a `sell` this means you are selling `amount` of the `BASE` currency at a price of `rate` `QUOTE` currency per `BASE`.

If there was a fee for the trade you should input it in the corresponding box and also enter the currency the fee was paid in. Fee can also be 0.

You can provide additional notes or even links to blockchain explorers for each trade.

At the bottom of this page you can see a table of all your OTC trades.

### Creating a Tax Report

Rotkehlchen creates a tax report for you based on your trades and some settings which you can configure at the user settings page. This is essentially a calculation of profit or loss for all your trades based on the given dates.

Some settings are at the moment hard coded, for the German tax jurisdiction. For example all profit/loss calculation is done for trades on a first-in/first-out basis and profits from selling crypto assets after 1 year are non taxable. These settings will be made adjustable soon.


To create a tax report click on the "Tax Report" button from the left menu. Choose a start and an end date for the report and then click the "Generate Report" button.

The calculation may take some time. Once done you have an overview of the profit/loss for the given period, how much of that is taxable, and how much each taxable event category contributes to the total.

Additionally below the overview you get a table containing all of the taxable events that were taken into account in the calculation along with how much of the `profit_currency` you lost or gained through that event.

Finally you can get a nice CSV export by pressing the "Export CSV" button. This export is meant to be imported into google sheets. Press the button and then choose a directory to write the CSV files to. Once done you can import the CSV files into google sheets via its import menu.

## Wanna Help?


### Contribute

It's an open-source project so help is really appreciated.

Open issues or pull requests to help with development, be active in Github and above all be nice.

In order for your Pull Request to be considered it will need to pass the automated CI tests and you will also need to sign the CLA (Contributor's license agreement).


### Get Premium -- Coming Soon

Buy a premium subscription to the software and help us with the development while at the same time enjoying all the cool neat features coming to premium subscribers.

### Donate

Don't want or can't afform premium? Still wanna help? We also accept donations.

- Donate ETH or ERC20 tokens to this address: [0x9531c059098e3d194ff87febb587ab07b30b1306](https://etherscan.io/address/0x9531c059098e3d194ff87febb587ab07b30b1306)

- Donate BTC to: 1PfvkW8MC7Ns2y8zn6CE2P2t5f19KF8XiW

