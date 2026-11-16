"""Liveness and readiness checks."""
import time

STARTED_AT = time.time()


def uptime_seconds():
    return int(time.time() - STARTED_AT)


def readiness(dependencies):
    return all(dependency.ping() for dependency in dependencies)
