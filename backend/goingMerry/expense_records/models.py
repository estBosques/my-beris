from django.db import models

class ExpenseType(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return self.name

# Expense model
class Expense(models.Model):
    # Expense model fields
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    expenseType = models.ForeignKey(ExpenseType, on_delete=models.RESTRICT)
    category = models.ForeignKey(Category, on_delete=models.RESTRICT)
    hasDetails = models.BooleanField(default=False)

    # Expense model methods
    def __str__(self):
        return "%s %s %s %s" % (self.amount, self.expenseType, self.category, self.hasDetails)

class ExpenseDetail(models.Model):
    expenseId = models.ForeignKey(Expense, on_delete=models.CASCADE)
    date = models.DateField() #TODO: move this to expense model (default to current day)
    notes = models.CharField(max_length=200)
    def __str__(self):
        return "%s %s %s" % (self.expenseId, self.date, self.notes)	

class Tag(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return self.name

class TagPerDetail(models.Model):
    expenseDetailId = models.ForeignKey(ExpenseDetail, on_delete=models.CASCADE)
    tagId = models.ForeignKey(Tag, on_delete=models.RESTRICT)
    def __str__(self):
        return "%s %s" % (self.expenseDetailId, self.tagId)