# tf-connected

![Build Status](https://github.com/fscherwi/tf-connected/actions/workflows/ci.yml/badge.svg) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/7d34af447e234a57ae8b3daf348c02f5)](https://www.codacy.com/app/fscherwi/tf-connected?utm_source=github.com&utm_medium=referral&utm_content=fscherwi/tf-connected&utm_campaign=Badge_Grade)

## With this Utility you can easily show connected Tinkerforge Bricks and Bricklets and informations about that!

# Install

```shell
 $ npm install tf-connected -g
```

# Usage

**Simple list connected Bricks and Bricklets**

```shell
 $ tf-connected
```

**Show output as table**

```shell
 $ tf-connected --table
```

## Advanced functions

**Show advanced informations about connected Bricks and Bricklets**

```shell
 $ tf-connected -a
```

**Custom HOST**

```shell
 $ tf-connected list -h <your-host>
```

**Custom PORT**

```shell
 $ tf-connected list -p <your-port>
```
