from rest_framework import serializers

from .models import Expense

class ExpenseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Expense
        fields = ('id', 'amount', 'expenseType', 'category', 'hasDetails')