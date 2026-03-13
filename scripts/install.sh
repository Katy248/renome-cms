#!/usr/bin/env bash

cp renome-cms.service /etc/systemd/system/
systemctl enable renome-cms --now
