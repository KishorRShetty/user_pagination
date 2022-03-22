#!/bin/bash
ip a > ip/ip_ip.txt
hostname -I | awk '{print $1}' > ip/ip_hostname.txt
ip route get 1.2 > ip/ip_route.txt
ifconfig -a. > ip/ip_ifconfig.txt
