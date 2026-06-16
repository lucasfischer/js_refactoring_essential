#!/usr/bin/env bash

echo "Running Shipping Calculator Tests..."
echo

node ShippingApp.js 1001
echo
node ShippingApp.js 1002
echo
node ShippingApp.js 1003

echo
echo "Done."