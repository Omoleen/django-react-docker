from rest_framework import generics, serializers, status
from rest_framework.response import Response
import pendulum

class DateTimeView(generics.GenericAPIView):
    
    def get(self, request):
        now = pendulum.now()
        return Response({
            "date": now.to_date_string(),
            "time": now.to_time_string(),
            "timezone": now.timezone_name,
        })