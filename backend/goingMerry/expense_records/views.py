from rest_framework import viewsets

from .serializers import ExpenseSerializer, ExpenseTypeSerializer
from .models import Expense, ExpenseType

class ExpenseViewSet(viewsets.ModelViewSet):
    queryset = Expense.objects.all().order_by('id')
    serializer_class = ExpenseSerializer

class ExpenseTypeViewSet(viewsets.ModelViewSet):
    queryset = ExpenseType.objects.all().order_by('id')
    serializer_class = ExpenseTypeSerializer