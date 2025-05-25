# Network Information

## Passive

arp -a

ifconfig / ipconfig

tcpdump -i eth0

netdiscover

# Responder

### Analyze Mode
responder -I eth0 -A

responder -I eth0 -wFP

### Fore Basic Auth
responder -I eth0 -wbFP

# SSH Tunneling

### Socks proxy
ssh -D 8080 root@127.0.0.1
